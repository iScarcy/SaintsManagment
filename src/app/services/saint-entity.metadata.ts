import { EntityMetadataMap } from "@ngrx/data";
import { compareSaint } from "../model/saint";

//@ngrx/data: definisco le entità
const entityMetadata: EntityMetadataMap = {
    Saint: {
      sortComparer: compareSaint
    }
  }
  
 // because the plural of "hero" is not "heros"
const pluralNames = { Saint: 'Saints' }; 

export const entityConfig = {
    entityMetadata,
    pluralNames
  };