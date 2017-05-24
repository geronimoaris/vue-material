<template>
  <md-input-container class="md-chips" :class="[themeClass, classes]" @click.native="applyInputFocus" :class="mdContainerClass">
    <md-chip
      v-for="chip in selectedChips"
      :md-deletable="!mdStatic"
      :disabled="disabled"
      @delete="deleteChip(chip)">
      <slot name="chip" :value="chip">{{ chip }}</slot>
    </md-chip>

    <md-input
      v-show="!mdStatic"
      v-model="currentChip"
      :type="mdInputType"
      :placeholder="mdInputPlaceholder"
      :id="inputId"
      :name="mdInputName"
      :disabled="disabled"
      @keydown.native.delete="deleteLastChip"
      @keydown.native.prevent.enter="addChip"
      @keydown.native.prevent.tab="addChip"
      @keydown.native.prevent.188="addChip"
      @blur.native="addChip"
      tabindex="0"
      ref="input">
    </md-input>

    <slot></slot>

    <span class="md-error" v-if="mdErrorMessage && mdErrorMessage.length > 0">{{ mdErrorMessage }}</span>
  </md-input-container>
</template>

<style lang="scss" src="./mdChips.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import uniqueId from '../../core/utils/uniqueId';

  export default {
    name: 'md-chips',
    props: {
      value: Array,
      disabled: Boolean,
      mdInputId: String,
      mdInputName: String,
      mdInputPlaceholder: String,
      mdInputType: {
        type: String,
        default: 'text'
      },
      mdStatic: Boolean,
      mdMax: {
        type: Number,
        default: Infinity
      },

      required: Boolean,
      mdContainerClass: {
        type: [Object, Array],
        default: () => []
      },
      mdErrorMessage: {
        type: String,
        default: ''
      }
    },
    mixins: [theme],
    data() {
      return {
        currentChip: null,
        selectedChips: this.value,
        inputId: this.mdInputId || 'chips-' + uniqueId()
      };
    },
    watch: {
      value(value) {
        this.selectedChips = value;
      }
    },
    computed: {
      classes() {
        return {
          'md-static': this.mdStatic,
          'md-disabled': this.disabled,
          'md-chips': true
        };
      }
    },
    methods: {
      applyInputFocus() {
        this.$nextTick(() => {
          this.$refs.input.$el.focus();
        });
      },
      addChip(event) {
        if (this.currentChip && this.selectedChips.length < this.mdMax) {
          const value = this.currentChip.trim();

          if (this.selectedChips.indexOf(value) < 0) {
            this.selectedChips.push(value);
            this.currentChip = null;
            this.$emit('input', this.selectedChips);
            this.$emit('change', this.selectedChips);

            if (event.type !== 'blur') {
              this.applyInputFocus();
            }
          } else if (event.type === 'blur') {
            this.currentChip = null;
          }
        }
      },
      deleteChip(chip) {
        let index = this.selectedChips.indexOf(chip);

        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }

        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      },
      editChip(chip) {
        let index = this.selectedChips.indexOf(chip);

        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }

        this.currentChip = chip;
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      },
      deleteLastChip() {
        if (!this.currentChip) {
          this.selectedChips.pop();
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    }
  };
</script>
