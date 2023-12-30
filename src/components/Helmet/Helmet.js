// ---------- IMPORTS ----------

// MODULES
import { Helmet } from 'react-helmet';

// FILES

// ---------- PRIVATE ----------
const LANG = 'en';
const METAS = [ { name: 'description', content: 'Vicente "Pustalorc" Pastor\'s Virtual Curriculum Vitae' } ];
const TITLE = 'Virtual Curriculum Vitae';

// ---------- PUBLIC ----------
export default function Head() {
  const metaElements = METAS.map((meta) => <meta
    key={meta.name}
    {...meta}
  />);

  return (
    <Helmet htmlAttributes={{ lang: LANG }}>
      {metaElements}
      <title>
        {TITLE}
      </title>
    </Helmet>
  );
}
