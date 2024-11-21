// interface detalhesGastosProps {
//     params: {
//         data: string[]
//     }
// }

// export default async function DetalhesGastos({params} : any){
//     //console.log(params)
//     const {id} = await params

//     return(
//         <h1>{id}</h1>
//     )
// }



interface DetalhesGastosProps {
    params: Promise<{
        data: string[]
    }>
}

export default async function DetalhesGastos({ params }: DetalhesGastosProps) {
    const resolvedParams = await params;

    const [id, ordem] = resolvedParams.data;

    return (
        <h1>{id} {ordem}</h1>
    );
}
