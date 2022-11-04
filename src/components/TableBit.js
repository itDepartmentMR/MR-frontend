function TableBit({data}) {
    return ( 
        <div className="contTableBit">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th></th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Volumen</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(coins => (
                        <tr key={coins.id}>
                            <img src={coins.image} alt={coins.name}/>
                            <td id="name">{coins.name}</td>
                            <td id="p">{coins.symbol.toUpperCase()}</td>
                            <td id="price">${coins.current_price}</td>
                            <td id={
                                coins.price_change_percentage_24h>0?"true":"false"
                            }>{coins.price_change_percentage_24h}</td>
                            <td >${coins.total_volume.toLocaleString('en')}</td>
                        </tr>   
                    )
                    )}
                </tbody>
            </table>
        </div>
     );
}

export default TableBit;