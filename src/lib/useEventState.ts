import { useEffect, useState } from "react";

export interface TeamData {
  id: string;
  name: string;
  topic: {
    id: string;
    title: string;
    description: string;
  } | null;
}

export interface EventState {
  event: {
    id: string;
    title: string;
  };
  currentTeam: TeamData | null;
  nextTeam: TeamData | null;
}

interface ApiResponse {
  success: boolean;
  data: EventState;
}

export function useEventState(eventId: string, intervalMs = 15000) {
  const [data, setData] = useState<EventState | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/public/events/${eventId}/current-state`,
        );
        const result: ApiResponse = await response.json();
        if (result.success) setData(result.data);
      } catch (error) {
        console.error("Failed to fetch event state:", error);
      }
    };

    void fetchData();
    const interval = setInterval(fetchData, intervalMs);
    return () => clearInterval(interval);
  }, [eventId, intervalMs]);

  return data;
}
