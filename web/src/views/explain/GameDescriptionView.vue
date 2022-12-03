<template>
    <ContentField>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            代码模板
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">模板</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label  class="form-label">Java代码</label>
                        <VAceEditor
                            v-model:value="dataForm.textareashow"
                            @init="editorInit"
                            lang="c_cpp"
                            theme="textmate"
                            style="height: 350px;" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </ContentField>
</template>


<script>
import ContentField from "@/components/ContentField.vue"
import { VAceEditor } from 'vue3-ace-editor';
import ace from 'ace-builds';
import { reactive } from "vue";
export default {
    components: {
        ContentField,
        VAceEditor,
    },
    setup() {
        ace.config.set(
        "basePath", 
        "https://cdn.jsdelivr.net/npm/ace-builds@" + require('ace-builds').version + "/src-noconflict/")

        const dataForm = reactive({
        textareashow: '{"A":"A1"}'
            });
        return {
            dataForm,
        }
    },
  
}
</script>

<style scoped>

</style>