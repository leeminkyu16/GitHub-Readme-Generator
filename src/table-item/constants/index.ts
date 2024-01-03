import { ProgrammingToolTableItems } from './ProgrammingToolTableItems';
import { OtherToolTableItems } from './OtherToolTableItems';
import { WebStyleLibraryTableItems } from './WebStyleLibraryTableItems';
import { WebLibraryTableItems } from './WebLibraryTableItems';
import { ServiceTableItems } from './ServiceTableItems';
import { LanguageTableItems } from './LanguageTableItems';
import { IdeTableItems } from "./IdeTableItems";
import { SourceCodeRepoHostingTableItems } from './SourceCodeRepoHostingTableItems';
import { WebFrameworkTableItems } from './WebFrameworkTableItems';
import { DatabaseTableItems } from './DatabaseTableItems';

export const ConstantTableItems = {
    ...IdeTableItems,
    ...ServiceTableItems,
    ...DatabaseTableItems,
    ...LanguageTableItems,
    ...OtherToolTableItems,
    ...WebLibraryTableItems,
    ...WebFrameworkTableItems,
    ...ProgrammingToolTableItems,
    ...WebStyleLibraryTableItems,
    ...SourceCodeRepoHostingTableItems,
}
