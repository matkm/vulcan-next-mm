import Link from 'next/link'

const VNSDemo = () => {
  return (
    <div>
      <h1>Debug Pages Index</h1>
      <h2>(vulcan-next-starter)</h2>
      <main>
        <p>
          <Link href="/vns/debug/about">
            <a>About</a>
          </Link>
        </p>

        <p>
          <Link href="/vns/debug/apolloSsr">
            <a>Apollo SSR</a>
          </Link>
        </p>

        <p>
          <Link href="/vns/debug/css">
            <a>CSS</a>
          </Link>
        </p>

        <p>
          <Link href="/vns/debug/i18n">
            <a>Internationalisation</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/meteor">
            <a>Meteor</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/mongo">
            <a>Mongo</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/mui">
            <a>MUI</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/noApolloSsr">
            <a>No Apollo SSR</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/private-raw">
            <a>Private Page - Raw</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/private">
            <a>Private Page</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/public">
            <a>Public Page</a>
          </Link>
        </p>
        
        <p>
          <Link href="/vns/debug/sc-mui">
            <a>Styled Components MUI</a>
          </Link>
        </p>
        
      </main>
    </div>
  );
}

VNSDemo.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

export default VNSDemo;