import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getDevIconClassName } from "@/lib/utils";

interface props {
  id: string;
  name: string;
  questions: number;
  showCount: boolean;
  compact: boolean;
}

const TagCard = ({ id, name, questions, showCount, compact }: props) => {
  const iconClassName = getDevIconClassName(name);

  return (
    <Link href={`${ROUTES.TAGS(id)}`} className="flex justify-between gap-2">
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={iconClassName}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
