export default async function fetcher(url: string) {
    return fetch(url, {
        credentials: "include",
    }).then((res) => res.json())
        .catch((error) => {
            console.error("Error fetching data:", error);
            return { error: "Error fetching data" };
        });
}
