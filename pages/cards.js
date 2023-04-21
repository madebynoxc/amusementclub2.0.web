
import DashboardLayout from "LayoutContainers/DashboardLayout";
import DashboardNavbar from "Navbars/DashboardNavbar";
import CardView from 'Views/CardView'

import useSWR from 'swr';
import { fetcher } from "utils";

const Cards = () => {
  const { data, error } = useSWR('/api/collections', fetcher);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CardView collections={data} />
    </DashboardLayout>
  )
}

export default Cards
