import Nav from './nav'

 const layout = ({ content }) => <div>
  <Nav />
  {content()}
</div>

 export default layout
