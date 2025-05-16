import { promises as fs } from "fs";

export async function generateStaticParams() {
    const file = await fs.readFile(
        process.cwd() + "/public/data/student-orgs.json",
        "utf8"
    );
    const data = JSON.parse(file);

    return data.map((organization: any) => ({
        slug: organization.id,
    }));
}

export default async function Page({ params }: { params: { org: string } }) {
    const file = await fs.readFile(
        process.cwd() + "/public/data/student-orgs.json",
        "utf8"
    );
    const data = JSON.parse(file);

    const organizationData = data.find(
        (organization: any) => organization.orgId === params.org
    );

    return <div>Helllo {organizationData && organizationData.orgTitle}</div>;
}
