<template>
    <div class="btn-group">
        <li ref="button" @click="toggleMenu" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
            {{ selectedOption.name }}
            <!--<span class="caret"></span>-->
        </li>
        <ul class="dropdown-menu" v-show="showMenu" v-closable="{exclude: ['button'], handler: 'closeMenu'}">
            <li v-for="option in options">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    {{ option.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {
                    name: '',
                },
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            placeholder: [String]
        },

        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder) {
                this.placeholderText = this.placeholder;
            }
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.closeMenu()
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
            closeMenu() {
                this.showMenu = false;
            }
        },
    }
</script>

<style>

    .btn-group {
        height: 40px;
        position: relative;
        display: inline-block;
    }

    .btn-group a:hover {
        text-decoration: none;
    }

    .dropdown-toggle {
        text-transform: none;
        margin-bottom: 7px;
        border: 0;
        float: none;
        box-shadow: none;
        text-decoration: underline;
        border-radius: 0;
    }

    .dropdown-toggle:hover {
        cursor: pointer;
    }

    .dropdown-menu {
        position: absolute;
        z-index: 1000;
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: 14px;
        text-align: left;
        background-color: rgba(255, 255, 255, .5);
        border: transparent;
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        background-clip: padding-box;
    }

    .dropdown-menu > li > a {
        padding: 10px 25px;
        display: block;
        clear: both;
        line-height: 1.6;
        color: #333333;
        white-space: nowrap;
        text-decoration: none;
    }

    .dropdown-menu > li > a:hover {
        background: rgba(255, 255, 255, 1);
    }

    .dropdown-menu > li {
        overflow: hidden;
        width: 100%;
        position: relative;
        margin: 0;
    }

    li {
        list-style: none;
    }
</style>
