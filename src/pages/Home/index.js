import { BarChart } from '@/components/BarChart'

const Home = () => {
  return (
    <div>
      <BarChart
        xData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        sData={[120, 200, 150, 80, 70, 110, 130]} />
      <BarChart
        xData={['Vue', 'React', 'Angular']}
        sData={[200, 500, 100]}
        style={{ width: '500px', height: '400px' }} />
    </div >
  )
}

export default Home