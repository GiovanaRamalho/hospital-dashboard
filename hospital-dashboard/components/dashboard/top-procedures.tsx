import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Procedure } from "@/lib/mock/procedures";

type TopProceduresProps = {
  data: Procedure[];
};

export function TopProcedures({
  data,
}: TopProceduresProps) {

  const approvedProcedures = data.filter(
    (procedure) => procedure.status === "approved"
  );

  const top5 = [...approvedProcedures]
    .sort((a, b) => b.executions - a.executions)
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Top 5 procedimentos mais executados
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {top5.map((procedure, index) => (
            <div
              key={procedure.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  {index + 1}. {procedure.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {procedure.executions} execuções
                </p>
              </div>

              <p className="font-semibold">
                {(
                  procedure.value *
                  procedure.executions
                ).toLocaleString(
                  "pt-BR",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}