// ---------- PRIVATE ----------
const rocketModCommandsExtended = {
  titleUrl: 'https://github.com/Pustalorc/RocketModCommandsExtended',
  title: 'RocketMod Commands Extended',
  licenseUrl: 'https://github.com/Pustalorc/RocketModCommandsExtended/blob/master/LICENSE.md',
  licenseCode: 'LGPL-3.0',
  shortDescription: `A NuGet library that is meant to provide abstractions to improve and extend RocketMod's 
    commands.`,
  fullDescription: `This project is made to standarize commands, as well as make them a lot easier to work with. 
    It brings translations built into the commands themselves, multithreading and asynchronous support, and automatic 
    parsing of commands into them. This allows a developer to significantly speed up development of commands, as they 
    no longer have to write multiple if statements and custom checks for the command arguments, the translations, or 
    if their code needs to run on a separate thread.`
};

// ---------- PUBLIC ----------
export default rocketModCommandsExtended;
