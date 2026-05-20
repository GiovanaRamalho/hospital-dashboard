"use client";

import { useEffect, useState } from "react";

import { getProcedures } from "@/lib/mock/api";
import { Procedure } from "@/lib/mock/procedures";

import { mockUser, User } from "@/lib/mock/user";

import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { ProceduresTable } from "@/components/dashboard/procedures-table";
import { TopProcedures } from "@/components/dashboard/top-procedures";

import { ProfileCard } from "@/components/profile/profile-card";
import { ProfileForm } from "@/components/profile/profile-form";

export default function DashboardPage() {
  const [data, setData] = useState<Procedure[]>([]);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<User>(mockUser);

  const [isProfileOpen, setIsProfileOpen] =
    useState(false);

  useEffect(() => {
    async function loadData() {
      const res = await getProcedures();

      setData(res as Procedure[]);
      setLoading(false);
    }

    loadData();
  }, []);

  const totalProcedures = data.reduce(
    (acc, p) => acc + p.executions,
    0
  );

  const rejected = data.filter(
    (p) => p.status === "rejected"
  );

  const approved = data.filter(
    (p) => p.status === "approved"
  );

  const totalRejectedValue = rejected.reduce(
    (acc, p) => acc + p.value * p.executions,
    0
  );

  const totalApprovedValue = approved.reduce(
    (acc, p) => acc + p.value * p.executions,
    0
  );

  return (
    <>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard de Gestão Hospitalar
        </h1>

        <p className="text-muted-foreground mt-1">
          Visão geral dos procedimentos hospitalares
        </p>

        {/* Usuário */}
        <ProfileCard
          user={user}
          onEdit={() => setIsProfileOpen(true)}
        />

        {/* KPIs */}
        <MetricsCards
          totalProcedures={totalProcedures}
          totalRejected={rejected.length}
          totalApprovedValue={totalApprovedValue}
          totalRejectedValue={totalRejectedValue}
        />

        <TopProcedures data={data} />

        {/* Tabela */}
        <ProceduresTable
          data={data}
          loading={loading}
        />
      </div>

      {/* Modal */}
      <ProfileForm
        open={isProfileOpen}
        onOpenChange={setIsProfileOpen}
        user={user}
        onSave={setUser}
      />
    </>
  );
}