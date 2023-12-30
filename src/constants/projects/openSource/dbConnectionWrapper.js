// ---------- IMPORTS ----------

// MODULES
import Link from '@mui/material/Link';

// FILES

// ---------- PRIVATE ----------
const LINK_PROPS = {
  href: 'https://docs.microsoft.com/en-us/dotnet/api/system.data.common.dbconnection',
  underline: 'hover',
  color: '#50f0ff'
};

const descriptionSection1 = `This project was split from MySqlConnectorWrapper as to provide a fully globally 
  compatible wrapper for any database connection libraries that inherit from ADO.NET's `;

const descriptionLinkText = 'DbConnection class';

const descriptionSection2 = `. It currently supports running all queries asynchronously, running queries in parallel, 
  automatic rollbacks on transactions in the case of an issue, and a conversion from an open reader to in memory 
  structured data of a reader's result.`;


const dbConnectionWrapper = {
  titleUrl: 'https://github.com/Pustalorc/DbConnectionWrapper',
  title: 'DbConnection Wrapper',
  licenseUrl: 'https://github.com/Pustalorc/DbConnectionWrapper/blob/master/LICENSE.md',
  licenseCode: 'MIT',
  shortDescription:
    'A NuGet library that provides abstractions for any ADO.NET database connection to reduce boilerplate.',
  fullDescription: (
    <>
      {descriptionSection1}
      <Link {...LINK_PROPS}>
        {descriptionLinkText}
      </Link>
      {descriptionSection2}
    </>
  )
};

// ---------- PUBLIC ----------
export default dbConnectionWrapper;
