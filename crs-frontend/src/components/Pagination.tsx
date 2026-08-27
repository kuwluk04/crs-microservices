interface PaginationProps {
    currentPage: number; // Trang hiện tại (bắt đầu từ 0)
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    // Không hiển thị nếu tổng số trang <= 1
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i);

    return (
        <div style={{ display: 'flex', gap: 6, marginTop: 16 }}>
            {/* Nút Trang trước */}
            <button
                disabled={currentPage === 0}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &lt;&lt; Trang trước
            </button>

            {/* Danh sách các số trang */}
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    style={{
                        fontWeight: p === currentPage ? 'bold' : 'normal',
                        textDecoration: p === currentPage ? 'underline' : 'none',
                    }}
                >
                    {p + 1}
                </button>
            ))}

            {/* Nút Trang sau */}
            <button
                disabled={currentPage >= totalPages - 1}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Trang sau &gt;&gt;
            </button>
        </div>
    );
}