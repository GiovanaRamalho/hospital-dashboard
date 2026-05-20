"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { User } from "@/lib/mock/user";

type ProfileFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
  onSave: (updatedUser: User) => void;
};

export function ProfileForm({
  open,
  onOpenChange,
  user,
  onSave,
}: ProfileFormProps) {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState(user.password);

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  function validate() {
    const newErrors = {
      name: "",
      password: "",
    };

    const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,30}$/;

    if (!nameRegex.test(name)) {
      newErrors.name =
        "Nome deve conter apenas letras e ter entre 3 e 30 caracteres.";
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Senha deve ter entre 8 e 12 caracteres e conter letras e números.";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.password;
  }

  function handleSubmit() {
    if (!validate()) return;

    onSave({
      ...user,
      name,
      password,
    });

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Nome */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Nome
            </label>

            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              E-mail
            </label>

            <Input value={user.email} disabled />
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Senha
            </label>

            <Input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Salvar Alterações
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}