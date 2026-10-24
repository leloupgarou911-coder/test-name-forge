import { LanguageCode } from '../types';

export interface MyNamesAuditLabels {
  trackedNames: string;
  resetFilters: string;
  notRated: string;
  rateStars: string;
  importSuccess: string;
  importError: string;
}

const LABELS: Partial<Record<LanguageCode, MyNamesAuditLabels>> & {
  en: MyNamesAuditLabels;
  fr: MyNamesAuditLabels;
} = {
  en: { trackedNames: 'Tracked names', resetFilters: 'Reset filters', notRated: 'Not rated', rateStars: 'Rate {count} stars', importSuccess: 'Import successful: {added} added, {updated} updated, {skipped} skipped.', importError: 'Error' },
  fr: { trackedNames: 'Noms suivis', resetFilters: 'Réinitialiser les filtres', notRated: 'Non noté', rateStars: 'Noter {count} étoiles', importSuccess: 'Importation réussie : {added} ajoutés, {updated} mis à jour, {skipped} ignorés.', importError: 'Erreur' },
  es: { trackedNames: 'Nombres seguidos', resetFilters: 'Restablecer filtros', notRated: 'Sin valorar', rateStars: 'Valorar con {count} estrellas', importSuccess: 'Importación correcta: {added} añadidos, {updated} actualizados, {skipped} omitidos.', importError: 'Error' },
  de: { trackedNames: 'Verfolgte Namen', resetFilters: 'Filter zurücksetzen', notRated: 'Nicht bewertet', rateStars: 'Mit {count} Sternen bewerten', importSuccess: 'Import erfolgreich: {added} hinzugefügt, {updated} aktualisiert, {skipped} übersprungen.', importError: 'Fehler' },
  it: { trackedNames: 'Nomi monitorati', resetFilters: 'Reimposta filtri', notRated: 'Non valutato', rateStars: 'Valuta con {count} stelle', importSuccess: 'Importazione riuscita: {added} aggiunti, {updated} aggiornati, {skipped} ignorati.', importError: 'Errore' },
  pt: { trackedNames: 'Nomes acompanhados', resetFilters: 'Redefinir filtros', notRated: 'Sem avaliação', rateStars: 'Avaliar com {count} estrelas', importSuccess: 'Importação concluída: {added} adicionados, {updated} atualizados, {skipped} ignorados.', importError: 'Erro' },
  ar: { trackedNames: 'الأسماء المتابعة', resetFilters: 'إعادة ضبط عوامل التصفية', notRated: 'غير مُقيّم', rateStars: 'قيّم بـ {count} نجوم', importSuccess: 'تم الاستيراد بنجاح: أُضيف {added}، وحُدّث {updated}، وتُخطّي {skipped}.', importError: 'خطأ' },
  tr: { trackedNames: 'Takip edilen adlar', resetFilters: 'Filtreleri sıfırla', notRated: 'Puanlanmadı', rateStars: '{count} yıldızla puanla', importSuccess: 'İçe aktarma başarılı: {added} eklendi, {updated} güncellendi, {skipped} atlandı.', importError: 'Hata' },
  ja: { trackedNames: '追跡中の名前', resetFilters: 'フィルターをリセット', notRated: '未評価', rateStars: '{count}つ星で評価', importSuccess: 'インポート成功：{added}件追加、{updated}件更新、{skipped}件スキップ。', importError: 'エラー' },
  ko: { trackedNames: '추적 중인 이름', resetFilters: '필터 초기화', notRated: '평가되지 않음', rateStars: '{count}개 별점 주기', importSuccess: '가져오기 성공: {added}개 추가, {updated}개 업데이트, {skipped}개 건너뜀.', importError: '오류' },
  zh: { trackedNames: '已跟踪名称', resetFilters: '重置筛选条件', notRated: '未评分', rateStars: '评为 {count} 星', importSuccess: '导入成功：新增 {added} 项，更新 {updated} 项，跳过 {skipped} 项。', importError: '错误' },
  ru: { trackedNames: 'Отслеживаемые имена', resetFilters: 'Сбросить фильтры', notRated: 'Без оценки', rateStars: 'Оценить в {count} звёзд', importSuccess: 'Импорт выполнен: добавлено {added}, обновлено {updated}, пропущено {skipped}.', importError: 'Ошибка' },
  hi: { trackedNames: 'ट्रैक किए गए नाम', resetFilters: 'फ़िल्टर रीसेट करें', notRated: 'रेटिंग नहीं दी गई', rateStars: '{count} स्टार की रेटिंग दें', importSuccess: 'आयात सफल: {added} जोड़े गए, {updated} अपडेट हुए, {skipped} छोड़े गए।', importError: 'त्रुटि' },
  nl: { trackedNames: 'Gevolgde namen', resetFilters: 'Filters resetten', notRated: 'Niet beoordeeld', rateStars: 'Beoordeel met {count} sterren', importSuccess: 'Import geslaagd: {added} toegevoegd, {updated} bijgewerkt, {skipped} overgeslagen.', importError: 'Fout' },
  pl: { trackedNames: 'Śledzone nazwy', resetFilters: 'Resetuj filtry', notRated: 'Brak oceny', rateStars: 'Oceń na {count} gwiazdek', importSuccess: 'Import zakończony: dodano {added}, zaktualizowano {updated}, pominięto {skipped}.', importError: 'Błąd' },
  sv: { trackedNames: 'Följda namn', resetFilters: 'Återställ filter', notRated: 'Inte betygsatt', rateStars: 'Betygsätt med {count} stjärnor', importSuccess: 'Importen lyckades: {added} tillagda, {updated} uppdaterade, {skipped} överhoppade.', importError: 'Fel' },
  vi: { trackedNames: 'Tên đang theo dõi', resetFilters: 'Đặt lại bộ lọc', notRated: 'Chưa đánh giá', rateStars: 'Đánh giá {count} sao', importSuccess: 'Nhập thành công: thêm {added}, cập nhật {updated}, bỏ qua {skipped}.', importError: 'Lỗi' },
  id: { trackedNames: 'Nama yang dilacak', resetFilters: 'Atur ulang filter', notRated: 'Belum dinilai', rateStars: 'Beri nilai {count} bintang', importSuccess: 'Impor berhasil: {added} ditambahkan, {updated} diperbarui, {skipped} dilewati.', importError: 'Kesalahan' },
  th: { trackedNames: 'ชื่อที่ติดตาม', resetFilters: 'รีเซ็ตตัวกรอง', notRated: 'ยังไม่ได้ให้คะแนน', rateStars: 'ให้คะแนน {count} ดาว', importSuccess: 'นำเข้าสำเร็จ: เพิ่ม {added} รายการ อัปเดต {updated} รายการ ข้าม {skipped} รายการ', importError: 'ข้อผิดพลาด' },
  el: { trackedNames: 'Παρακολουθούμενα ονόματα', resetFilters: 'Επαναφορά φίλτρων', notRated: 'Χωρίς αξιολόγηση', rateStars: 'Βαθμολόγηση με {count} αστέρια', importSuccess: 'Επιτυχής εισαγωγή: προστέθηκαν {added}, ενημερώθηκαν {updated}, παραλείφθηκαν {skipped}.', importError: 'Σφάλμα' },
  he: { trackedNames: 'שמות במעקב', resetFilters: 'איפוס מסננים', notRated: 'לא דורג', rateStars: 'דירוג של {count} כוכבים', importSuccess: 'הייבוא הצליח: נוספו {added}, עודכנו {updated}, דולגו {skipped}.', importError: 'שגיאה' },
  cs: { trackedNames: 'Sledovaná jména', resetFilters: 'Obnovit filtry', notRated: 'Bez hodnocení', rateStars: 'Ohodnotit {count} hvězdami', importSuccess: 'Import úspěšný: přidáno {added}, aktualizováno {updated}, přeskočeno {skipped}.', importError: 'Chyba' },
  ro: { trackedNames: 'Nume urmărite', resetFilters: 'Resetează filtrele', notRated: 'Neevaluat', rateStars: 'Evaluează cu {count} stele', importSuccess: 'Import reușit: {added} adăugate, {updated} actualizate, {skipped} omise.', importError: 'Eroare' },
  da: { trackedNames: 'Navne, der følges', resetFilters: 'Nulstil filtre', notRated: 'Ikke bedømt', rateStars: 'Bedøm med {count} stjerner', importSuccess: 'Import gennemført: {added} tilføjet, {updated} opdateret, {skipped} sprunget over.', importError: 'Fejl' },
  fi: { trackedNames: 'Seuratut nimet', resetFilters: 'Nollaa suodattimet', notRated: 'Ei arvioitu', rateStars: 'Arvioi {count} tähdellä', importSuccess: 'Tuonti onnistui: lisätty {added}, päivitetty {updated}, ohitettu {skipped}.', importError: 'Virhe' },
};

export function getMyNamesAuditLabels(language: LanguageCode): MyNamesAuditLabels {
  return LABELS[language] || LABELS.en;
}
