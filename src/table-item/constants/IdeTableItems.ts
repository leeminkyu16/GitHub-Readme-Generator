import { TableItem } from "../TableItem";

export const IdeTableItems = {
    AndroidStudio: new TableItem({
        label: "Android Studio",
        iconName: "androidstudio.svg",
        href: "https://developer.android.com/studio",
    }),
    IntellijIdea: new TableItem({
        label: "Intellij IDEA",
        iconName: "jetbrains.svg",
        href: "https://www.jetbrains.com/idea/",
    }),
    Xcode: new TableItem({
        label: "Xcode",
        iconName: "xcode.svg",
        href: "https://developer.apple.com/xcode/",
    }),
    VsCode: new TableItem({
        label: "Visual Studio Code",
        iconName: "vscode.svg",
        href: "https://code.visualstudio.com/",
    }),
    VisualStudio: new TableItem({
        label: "Visual Studio",
        iconName: "visualstudio.svg",
        href: "https://visualstudio.microsoft.com/",
    }),
    RStudio: new TableItem({
        label: "RStudio",
        iconName: "rstudio.svg",
        href: "https://posit.co/products/open-source/rstudio/",
    }),
}
