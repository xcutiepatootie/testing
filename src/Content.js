
const changeName = () => {
    const names = ['Macky', 'Tenten', 'Bebuuu'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

const Content = () => {
  return (
    <main>Hello {changeName()}</main>
  )
}

export default Content