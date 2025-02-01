import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;
  return (
    <div className="flex items-center  justify-between w-full">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="xs">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Pagina anterior</span>
          </Button>
          <Button variant="outline" size="xs">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
