<script>
export default {
    props: {
        designers: {
            type: String,
            default: ""
        },
        initialSearch: {
            type: String,
            default: ""
        },
        initialCollections: {
            type: Object,
      default() {
        return {}
      }
        }
    },
    data() {
        return {
            inputValue: this.initialSearch,
            collections: this.initialCollections,
            collectionResults: this.initialResults,
            productResults: {}
        }
    },
    computed: {
        searchHref() {
            return `/search?q=${this.inputValue}`
        }
    },
    watch: {
        inputValue(value) {
            const searchTerm = value.trim();

            if (searchTerm === '') {
                console.log('empty:', searchTerm)
                this.collectionResults = []
                return
            }
            this.getCollections(searchTerm);
        },

        collections(newCollections) {
            this.collectionResults = []
            console.log(newCollections)
            const designerHandles = this.designers.split(';').filter(item => item !== '')

            // check wether a designer is in the collections -> add to the search results
            designerHandles.forEach((handle) => {
                const collection = newCollections.find(collection => collection.handle === handle)

                if (!collection) {
                    return
                }

                // already have this result
                if (this.collectionResults.find(result => result.handle === collection.handle)) {
                    return
                }

                this.collectionResults.push(collection)
            })
        }

    },
    methods: {
        handleToggle() {
            this.$store.dispatch('overlays/toggleSearch');
            this.$nextTick(() => {
                this.$root.$refs.input.focus()
            });
        },
        getCollections(searchTerm) {
            fetch(`/search/suggest.json?q=${searchTerm}&resources[type]=collection,product`)
                .then((response) => {
                    if (!response.ok) {
                        var error = new Error(response.status);
                        throw error;
                    }

                    return response.text();
                })
                .then((rawResults) => {
                    this.collections = JSON.parse(rawResults).resources.results.collections;
                    this.productResults = JSON.parse(rawResults).resources.results.products;
                })
                .catch((error) => {
                    throw error;
                });
        }
    },
    render() {
        return this.$slots.default({
            searchHref: this.searchHref,
            inputValue: this.inputValue,
            setInputValue: value => this.inputValue = value,
            handleToggle: this.handleToggle,
            collectionResults: this.collectionResults,
            productResults: this.productResults
        })
    }
}
</script>