import React from "react";
import { NextPageContext } from "next";

type DynamicIndexPageProps = {
  name: string;
};

export default function DynamicIndexPage(
  props: DynamicIndexPageProps
): JSX.Element {
  return (
    <React.Fragment>
      <div>
        {`Hello ${props.name}. This is a dynamic SSG page using getStaticProps() with fallback true. It also has an image.`}
      </div>
      <img src={"/app-store-badge.png"} alt={"An image"} />
    </React.Fragment>
  );
}

export async function getStaticProps(
  ctx: NextPageContext
): Promise<{ props: DynamicIndexPageProps }> {
  return {
    props: { name: "serverless-next.js" }
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { dynamic: "a" } }, { params: { dynamic: "b" } }],
    fallback: true
  };
}
