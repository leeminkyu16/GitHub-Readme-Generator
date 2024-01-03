import * as fs from "fs";
import Handlebars from "handlebars";
import { TableItem } from "./table-item/TableItem";
import { mainTemplate } from "./template/MainTemplate";
import { PartialTableItemLabel } from './template/PartialTableItemLabel';
import { PartialTableItemImage } from "./template/PartialTableItemImage";
import { ConstantTableItems } from "./table-item/constants";

const tableItems: TableItem[] = [
	ConstantTableItems.EsLint,
	ConstantTableItems.Npm,
	ConstantTableItems.Typescript,
	ConstantTableItems.Nodejs,
	ConstantTableItems.VsCode,
]

const input = {
	widthPercentage: (100 / tableItems.length).toFixed(5),
	data: tableItems.map(item => item.data),
};

Handlebars.registerPartial("TableItemImage", PartialTableItemImage)
Handlebars.registerPartial("TableItemLabel", PartialTableItemLabel)

const output: string = Handlebars.compile(mainTemplate)(input);

if (fs.existsSync("./output")) {
	fs.rmSync("./output", { recursive: true })
}

fs.mkdirSync("./output");

fs.mkdirSync("./output/readme-assets");

(async (): Promise<void> => {
	const iconExistList: boolean[] = await Promise.all(
		tableItems.map(
			async (tableItem: TableItem): Promise<boolean> => {
				return fs.existsSync(`./src/assets/icons/${tableItem.data.iconName}`)
			}
		),
	)

	await Promise.all(
		tableItems.map((tableItem: TableItem, index: number): Promise<void> => {
			if (!iconExistList[index]) {
				console.log(`${tableItem.data.iconName} is not an icon`);
				return Promise.resolve();
			}

			return fs.promises.copyFile(
				`./src/assets/icons/${tableItem.data.iconName}`,
				`./output/readme-assets/${tableItem.data.iconName}`,
			)
		})
	)
	
	fs.writeFileSync("output/output.html", output)
})()

