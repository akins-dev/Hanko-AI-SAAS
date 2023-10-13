"use client";

import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) {
    return null;
  }

  return (
    <div>
    </div>
  )
}

export default DashboardPage;
