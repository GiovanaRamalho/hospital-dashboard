import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { User } from "@/lib/mock/user";

type ProfileCardProps = {
  user: User;
  onEdit: () => void;
};

export function ProfileCard({
  user,
  onEdit,
}: ProfileCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usuário Logado</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Nome</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">E-mail</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <Button onClick={onEdit}>
          Editar Perfil
        </Button>
      </CardContent>
    </Card>
  );
}