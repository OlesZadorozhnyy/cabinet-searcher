$(document).ready(() => {
	const updateModal = $('#updateModal');
	const deleteModal = $('#deleteModal');

	updateModal.on('show.bs.modal', onOpenUpdateModal);
	deleteModal.on('show.bs.modal', onOpenDeleteModal);

	function onOpenUpdateModal(e) {
		const cabinet = JSON.parse($(e.relatedTarget).attr('data-info'));
		const form = $(e.target).find('form');
		const inputNames = ['number', 'floor', 'department_id', 'target', 'details'];

		form.attr('action', '/' + cabinet.number);

		inputNames.map((name) => $(`[name="${name}"]`).val(cabinet[name]));
	}

	function onOpenDeleteModal(e) {
		const number = $(e.relatedTarget).attr('data-number');
		const form = $(e.target).find('form');

		form.attr('action', '/' + number);
	}
});