import { WeeklySignalsPage } from './components/WeeklySignalsPage';
import { weeklySignalsEp02 } from '../content/weeklySignalsEp02';

export default function Home() {
  return <WeeklySignalsPage issue={weeklySignalsEp02} />;
}
