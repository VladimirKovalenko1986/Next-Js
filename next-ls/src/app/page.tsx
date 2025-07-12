// import StatusLabel, { Status } from '@/app/components/status-label';
// import NotActiveLabel from './components/not-active-label';
// import ActiveLabel from './components/active-label';
import AddCompanyButton from './components/add-company-button';
import ClientComponents from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component copy';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      {/* <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Notactive</NotActiveLabel>
      <div>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </div>
      <p className="text-orange-700 bg-orange-100">Status</p> */}
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponents>
        <ServerComponentCopy />
      </ClientComponents>
    </main>
  );
}
