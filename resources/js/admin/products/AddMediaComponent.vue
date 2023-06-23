<template>
    <div
        id="mediaGallery"
        class="modal-media-gallery modal-block mt-0"
    >
        <section class="card">
            <header class="card-header">
                <h2 class="card-title">Select Images</h2>
            </header>
            <div class="card-body">
                <div class="modal-wrapper">
                    <div class="tabs">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="#upload"
                                    data-toggle="tab"
                                >File Upload</a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    href="#gallery"
                                    data-toggle="tab"
                                >Media Gallery</a>
                            </li>
                        </ul>
                        <div class="tab-content overflow-auto">
                            <div
                                id="upload"
                                class="tab-pane"
                            >
                                <vue2Dropzone
                                    id="media-dropzone-1"
                                    :class="'dropzone-modern initialized dz-square'"
                                    :options="options"
                                    @vdropzone-success="success"
                                    @vdropzone-removed-file="removeFile"
                                />
                            </div>
                            <div
                                id="gallery"
                                class="tab-pane active media-gallery"
                            >
                                <div
                                    class="row mg-files"
                                    v-if="totalMedia.length > 0"
                                    key="product-medias"
                                >
                                    <div
                                        class="col-6 col-xs-4 col-sm-3 col-md-1-5 col-lg-2 col-xl-1-8 col-xxl-1-10"
                                        v-for="medium in totalMedia"
                                        :key="medium.id"
                                    >
                                        <div
                                            class="thumbnail"
                                            :class="{
												'thumbnail-selected':
													medium.selected,
											}"
                                        >
                                            <div class="thumb-preview">
                                                <div class="centered">
                                                    <a
                                                        class="thumb-image"
                                                        :href="$root.getUrl(medium['copy_link'], true)"
                                                    >
                                                        <img
                                                            :src="$root.getUrl(medium['copy_link'], true)"
                                                            class="img-fluid"
                                                            alt="Project"
                                                        />
                                                    </a>
                                                </div>
                                                <div class="mg-thumb-options">
                                                    <div class="mg-toolbar">
                                                        <div class="mg-option checkbox-custom checkbox-inline">
                                                            <input
                                                                type="checkbox"
                                                                :id="
																	'file_' +
																	medium.id
																"
                                                                value="1"
                                                                :checked="
																	medium.selected
																"
                                                                :data-id="
																	medium.id
																"
                                                                @click="
																	$emit(
																		'file-click',
																		medium,
																		multiSelect
																	)
																"
                                                            />
                                                            <label :for="
																	'file_' +
																	medium.id
																">Select</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="row mg-files"
                                    v-else
                                    key="no-media"
                                >
                                    <div class="no-results text-center pt-5 m-auto">No media were found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <div class="row">
                    <div class="col-md-12 text-right">
                        <button
                            class="btn btn-primary modal-set"
                            @click="closeModal"
                        >Set</button>
                        <button
                            class="btn btn-default modal-dismiss"
                            @click="cancelModal"
                        >Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";

export default {
    components: {
        vue2Dropzone,
    },
    props: {
        totalMedia: Array,
        multiSelect: Boolean,
    },
    data: function () {
        return {
            options: {
                method: "post",
                url: window.baseUrl + "/admin/media",
                addRemoveLinks: true,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                headers: {
                    "X-CSRF-TOKEN": document.querySelector( "#csrf-token" )
                        .content,
                },
            },
        };
    },
    methods: {
        success: function ( file ) {
            this.$emit(
                "file-add-success",
                JSON.parse( file.xhr.response, this.multiSelect )
            );
        },
        removeFile: function ( file ) {
            this.$emit( "file-remove-success", JSON.parse( file.xhr.response ) );
        },
        closeModal: function () {
            document.querySelector( ".vm--overlay" ).click();
            let selectedMedia = this.totalMedia.filter(
                ( medium ) => medium.selected
            );
            this.$emit( "modal-set", selectedMedia );
        },
        cancelModal: function () {
            document.querySelector( ".vm--overlay" ).click();
        },
    },
};
</script>