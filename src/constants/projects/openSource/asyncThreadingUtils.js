// ---------- PRIVATE ----------
const asyncThreadingUtils = {
  titleUrl: 'https://github.com/Pustalorc/AsyncThreadingUtils',
  title: 'Async Threading Utils',
  licenseUrl: 'https://github.com/Pustalorc/AsyncThreadingUtils/blob/main/LICENSE.md',
  licenseCode: 'MIT',
  shortDescription:
    'A .NET library that adds a BackgroundWorker and TaskQueue with Async support.',
  fullDescription: `.NET provides a BackgroundWorker to work on a separate thread but with non async code. There was a 
    need for async support whilst still working on a separate thread without needing to run Task.Run or similar, so 
    this was developed. Additionally, a TaskQueue which uses the BackgroundWorker was added so one can queue a lot of 
    asynchronous tasks and execute them sequentally.`
};

// ---------- PUBLIC ----------
export default asyncThreadingUtils;