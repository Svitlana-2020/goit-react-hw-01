import css from '../TransactionHistory/TransactionHistory.module.css'

export default function TransactionHistory ({items}) {
    return <>
    <table className={css.table}>
  <thead className={css.header}>
    <tr>
      <th className={css.headerText}>Type</th>
      <th className={css.headerText}>Amount</th>
      <th className={css.headerText}>Currency</th>
    </tr>
  </thead>
  <tbody>
{items.map(item => (
  <tr className={css.bodyRow} key={item.id}>
      <td className={css.bodyText}>{item.type}</td>
      <td className={css.bodyText}>{item.amount}</td>
      <td className={css.bodyText}>{item.currency}</td>
    </tr>
))}
</tbody>
</table>
    </>
}
