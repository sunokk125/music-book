import { MainPage } from "@/components";
import CardList from "@/components/organisms/CardList/CardList";

const lists = [
  { id: 1, title: "방송1", description: "방송시자ㅏㅏㅏㅏㅏㄱㄱㄱ" },
  { id: 2, title: "방송2", description: "방송시자ㅏㅏㅏㅏㅏㄱㄱㄱ" },
];

export default function ChannelRoute() {
  return (
    <>
      <h3>channel</h3>
      <CardList items={lists}></CardList>
    </>
  );
}
