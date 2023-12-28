import React from "react";
import { serverAction } from "@/actions";

export default function InterceptedRouteModal() {
  return (
    <div>
      I am a modal and/or intercepted route.
      <form action={serverAction}>
        <button type="submit">Activate Server Action (from modal)</button>
      </form>
    </div>
  );
}
