<template>
  <div class="bg-grey-200 flex flex-col h-screen overflow-hidden w-screen">
    <layout-navbar :brand="brand" :left-nav="primaryNav.left" :right-nav="primaryNav.right" />
    <layout-navbar :primary="false" :left-nav="secondaryNav.left" :right-nav="secondaryNav.right" />
    <layout-main class="flex flex-col flex-grow overflow-scroll">
      <div class="bg-grey-200 p-3">
        <button class="btn btn--primary float-right">Create</button>
      </div>
      <div class="flex-grow bg-white overflow-scroll">
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
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
            <tr>
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
            <tr>
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
            <tr>
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
            <tr>
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
            <tr>
              <td>Creature from the Black Lagoon</td>
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
              <td>The Ghost of Frankenstein</td>
              <td>George Waggner</td>
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
              <td>Frankenstein Meets the Wolf Man</td>
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
      </div>
      <div class="bg-grey-200 p-3 text-right">
        <button class="btn btn--default mr-1">Cancel</button>
        <button class="btn btn--primary">Save</button>
      </div>
    </layout-main>
  </div>
</template>

<script>
import LayoutMain from '@/components/LayoutMain.vue';
import LayoutNavbar from '@/components/LayoutNavbar.vue';

export default {
  name: 'LayoutApp',
  components: {
    LayoutMain,
    LayoutNavbar
  },
  props: {
    brand: {
      default: '',
      type: String
    },
    heading: {
      required: true,
      type: String
    },
    primaryNav: {
      default: () => ({ left: [], right: [] }),
      type: Object
    },
    secondaryNav: {
      default: () => ({ left: [], right: [] }),
      type: Object
    }
  },
  data: () => ({
    open: false
  })

};
</script>
