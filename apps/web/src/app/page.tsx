export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-700">
          Chitti
        </h1>

        <p className="mt-3 text-gray-600">
          Smart chit fund management platform
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <Card
            title="Members"
            value="0"
          />

          <Card
            title="Active Chits"
            value="0"
          />

          <Card
            title="Collections"
            value="₹0"
          />

        </div>


      </div>

    </main>
  );
}


function Card(
  {
    title,
    value,
  }:
  {
    title:string;
    value:string;
  }
) {

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>

  );

}
