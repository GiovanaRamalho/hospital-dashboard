import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MetricsCardsProps = {
  totalProcedures: number;
  totalRejected: number;
  totalApprovedValue: number;
  totalRejectedValue: number;
};

export function MetricsCards({
  totalProcedures,
  totalRejected,
  totalApprovedValue,
  totalRejectedValue,
}: MetricsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total de Procedimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{totalProcedures}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rejeitados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{totalRejected}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Aprovados (R$)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {totalApprovedValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rejeitados (R$)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {totalRejectedValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}