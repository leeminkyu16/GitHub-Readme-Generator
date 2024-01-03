export const mainTemplate: string = `
<table>
<tbody>
	<tr align="center" valign="center">
		{{#each data}}
		{{> TableItemImage widthPercentage=../widthPercentage}}
		
		{{/each}}
	</tr>
	<tr align="center" valign="center">
		{{#each data}}
		{{> TableItemLabel widthPercentage=../widthPercentage}}

		{{/each}}
	</tr>
</tbody>
</table>
`.trim();
