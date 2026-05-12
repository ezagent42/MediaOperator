import { WeeklySignalsPage } from '../../../components/WeeklySignalsPage';
import { weeklySignalsEp02 } from '../../../../content/weeklySignalsEp02';

export const metadata = {
  title: '这周值得看的 10 个 signal｜第 02 期',
  description: 'Agent 正在从个人效率工具变成组织可编排的工作单元。'
};

export default function WeeklySignalsEp02() {
  return <WeeklySignalsPage issue={weeklySignalsEp02} />;
}
