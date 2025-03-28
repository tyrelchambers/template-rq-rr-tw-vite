import { AppSidebar } from "@/components/app-sidebar";
import Stat from "@/components/Stat";
import { TicketChart } from "@/components/TicketChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarProvider } from "@/components/ui/sidebar";
import { sampleTickets } from "@/data/sampletickets";
import {
  getClosedTickets,
  getInProgressTickets,
  getOpenTickets,
  getPendingTickets,
} from "@/utils/ticket";
import {
  faChevronsRight,
  faCircleCheck,
  faTimer,
} from "@fortawesome/pro-regular-svg-icons";
import { faPlus, faTicketSimple } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const data = sampleTickets;
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col flex-1">
        <header className="border-border justify-between border-b h-fit w-full p-4 flex items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-2 max-w-2xl w-full">
            <Input placeholder="Search..." className="flex-1" />
            <Button>
              <FontAwesomeIcon icon={faPlus} />
              New ticket
            </Button>
          </div>
        </header>

        <section className="m-10">
          <section className="grid grid-cols-4 gap-10">
            <Stat
              label="Open Tickets"
              icon={() => (
                <FontAwesomeIcon
                  icon={faTicketSimple}
                  className="text-accent"
                />
              )}
              value={getOpenTickets(data).length}
            />
            <Stat
              label="Closed Today"
              icon={() => (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-accent-green"
                />
              )}
              value={getClosedTickets(data).length}
            />
            <Stat
              label="In Progress"
              icon={() => (
                <FontAwesomeIcon
                  icon={faChevronsRight}
                  className="text-accent-sand"
                />
              )}
              value={getInProgressTickets(data).length}
            />
            <Stat
              label="Pending"
              icon={() => (
                <FontAwesomeIcon icon={faTimer} className="text-accent-muted" />
              )}
              value={getPendingTickets(data).length}
            />
          </section>

          <section className="my-10">
            <TicketChart chartData={data} />
          </section>
        </section>
      </main>
    </SidebarProvider>
  );
}
