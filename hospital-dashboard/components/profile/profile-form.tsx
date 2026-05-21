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
  const [password, setPassword] = useState("");

  const [isPasswordModalOpen, setIsPasswordModalOpen] =
    useState(false);

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmNewPassword, setConfirmNewPassword] =
    useState("");

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  function validate() {
    const newErrors = {
      name: "",
      password: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };

    const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,30}$/;

    if (!nameRegex.test(name)) {
      newErrors.name =
        "Nome deve conter apenas letras e ter entre 3 e 30 caracteres.";

      setErrors(newErrors);

      return false;
    }

    if (name !== user.name) {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

      if (!password) {
        newErrors.password =
          "Confirme sua senha para continuar.";
      } else if (!passwordRegex.test(password)) {
        newErrors.password =
          "Senha deve ter entre 8 e 12 caracteres e conter letras e números.";
      } else if (password !== user.password) {
        newErrors.password =
          "Senha incorreta.";
      }
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.password;
  }

  function handleSubmit() {
    if (!validate()) return;

    onSave({
      ...user,
      name,
    });

    onOpenChange(false);
  }

  function handleChangePassword() {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

    const newErrors = {
      ...errors,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };

    if (currentPassword !== user.password) {
      newErrors.currentPassword =
        "Senha atual incorreta.";
    }

    if (!passwordRegex.test(newPassword)) {
      newErrors.newPassword =
        "Senha deve ter entre 8 e 12 caracteres e conter letras e números.";
    }

    if (newPassword !== confirmNewPassword) {
      newErrors.confirmNewPassword =
        "As senhas não coincidem.";
    }

    setErrors(newErrors);

    if (
      newErrors.currentPassword ||
      newErrors.newPassword ||
      newErrors.confirmNewPassword
    ) {
      return;
    }

    onSave({
      ...user,
      password: newPassword,
    });

    setIsPasswordModalOpen(false);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,30}$/;

  const canRequestPassword =
    name !== user.name && nameRegex.test(name);

  const hasChanges = name !== user.name;

  return (
    <>
      {/* MODAL PERFIL */}
      <Dialog
        open={open}
        onOpenChange={(value) => {
          if (value) {
            setName(user.name);

            setPassword("");

            setErrors({
              name: "",
              password: "",
              currentPassword: "",
              newPassword: "",
              confirmNewPassword: "",
            });
          }

          onOpenChange(value);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Editar Perfil
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Nome */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Nome
              </label>

              <Input
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
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

              <Input
                value={user.email}
                disabled
              />
            </div>

            {/* confirmação de senha */}
            {canRequestPassword && (
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Confirme sua senha
                </label>

                <Input
                  type="password"
                  autoComplete="new-password"
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
            )}

            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={!hasChanges}
            >
              Salvar Alterações
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full text-sm text-muted-foreground"
              onClick={() =>
                setIsPasswordModalOpen(true)
              }
            >
              Alterar senha
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* MODAL ALTERAR SENHA */}
      <Dialog
        open={isPasswordModalOpen}
        onOpenChange={setIsPasswordModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Alterar senha
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* senha atual */}
            <div className="space-y-2">
              <label className="text-sm">
                Senha atual
              </label>

              <Input
                type="password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(
                    e.target.value
                  )
                }
              />

              {errors.currentPassword && (
                <p className="text-sm text-red-500">
                  {errors.currentPassword}
                </p>
              )}
            </div>

            {/* nova senha */}
            <div className="space-y-2">
              <label className="text-sm">
                Nova senha
              </label>

              <Input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
              />

              {errors.newPassword && (
                <p className="text-sm text-red-500">
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* confirmar nova senha */}
            <div className="space-y-2">
              <label className="text-sm">
                Confirmar nova senha
              </label>

              <Input
                type="password"
                value={confirmNewPassword}
                onChange={(e) =>
                  setConfirmNewPassword(
                    e.target.value
                  )
                }
              />

              {errors.confirmNewPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmNewPassword}
                </p>
              )}
            </div>

            <Button
              className="w-full"
              onClick={handleChangePassword}
            >
              Atualizar senha
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}