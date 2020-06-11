const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});

export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Base Styles',
};

export const Tables = () => ({
  template: `
<table class="table-hover">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Written By</th>
      <th>Year</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-bold">Creature from the Black Lagoon</td>
      <td>Maurice Zimm</td>
      <td>February 12, 1954</td>
      <td class="actions">
        <div class="btn-group">
          <button class="btn btn-ghost">♠</button>
          <button class="btn btn-ghost">♥</button>
          <button class="btn btn-ghost">♣</button>
          <button class="btn btn-ghost">♦</button>
        </div>
      </td>
    </tr>
    <tr>
      <td class="font-bold">The Ghost of Frankenstein</td>
      <td>George Waggner <br>Some other dude</td>
      <td>March 13, 1942</td>
      <td class="actions">
        <div class="btn-group">
          <button class="btn btn-ghost">♠</button>
          <button class="btn btn-ghost">♥</button>
          <button class="btn btn-ghost">♣</button>
          <button class="btn btn-ghost">♦</button>
        </div>
      </td>
    </tr>
    <tr>
      <td class="font-bold">The Mummy's Curse</td>
      <td>Oliver Drake</td>
      <td>December 22, 1944</td>
      <td class="actions">
        <div class="btn-group">
          <button class="btn btn-ghost">♠</button>
          <button class="btn btn-ghost">♥</button>
          <button class="btn btn-ghost">♣</button>
          <button class="btn btn-ghost">♦</button>
        </div>
      </td>
    </tr>
    <tr>
      <td class="font-bold">Frankenstein Meets the Wolf Man</td>
      <td>George Waggner</td>
      <td>March 5, 1943</td>
      <td class="actions">
        <div class="btn-group">
          <button class="btn btn-ghost">♠</button>
          <button class="btn btn-ghost">♥</button>
          <button class="btn btn-ghost">♣</button>
          <button class="btn btn-ghost">♦</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
`
});
