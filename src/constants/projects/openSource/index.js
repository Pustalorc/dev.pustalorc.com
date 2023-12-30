// ---------- IMPORTS ----------

// MODULES

// FILES
import rocketModCommandsExtended from './rocketmodCommandsExtended';
import unturnedServerManager from './unturnedServerManager';
import asyncThreadingUtils from './asyncThreadingUtils';
import dbConnectionWrapper from './dbConnectionWrapper';
import baseClustering from './baseClustering';
import openMod from './openMod';

// ---------- PRIVATE ----------
const OPEN_SOURCE_PROJECTS = [
  asyncThreadingUtils,
  dbConnectionWrapper,
  baseClustering,
  rocketModCommandsExtended,
  openMod,
  unturnedServerManager
];

// ---------- PUBLIC ----------
export default OPEN_SOURCE_PROJECTS;
