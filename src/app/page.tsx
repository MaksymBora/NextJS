import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-sm color-red-500">Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended} disabled={true}>
        Suspended
      </StatusLabel>
    </main>
  );
}
