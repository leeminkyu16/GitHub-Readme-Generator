import { TableItem } from "../TableItem";

export const DatabaseTableItems = {
    PostgreSql: new TableItem({
        label: "PostgreSQL",
        iconName: "postgresql.svg",
        href: "https://www.postgresql.org/",
    }),
    MongoDb: new TableItem({
        label: "MongoDB",
        iconName: "mongodb.svg",
        href: "https://www.mongodb.com/",
    }),
    MySql: new TableItem({
        label: "MySQL",
        iconName: "mysql.svg",
        href: "https://www.mysql.com/",
    }),
}
