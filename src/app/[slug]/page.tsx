import React from "react";

type NonModalPageProps = {
  params: {
    slug: string;
  };
};

export default function NonModalPage({ params: { slug } }: NonModalPageProps) {
  return (
    <div>
      This is not a modal. This is the page /[slug]. The slug is:
      <code>{slug}</code>
    </div>
  );
}
