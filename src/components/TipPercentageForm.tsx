const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]


export const TipPercentageForm = () => {
    return (
        <div className="p-3">
            <h3 className="font-bold text-lg">Tip:</h3>

            <form action="">
                {tipOptions.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                        <input type="radio" name="tip" value={option.value} id={option.id} />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}
