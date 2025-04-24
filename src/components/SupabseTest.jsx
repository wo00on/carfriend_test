// SupabaseTest.js
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function SupabaseTest() {
    const [connectionStatus, setConnectionStatus] = useState('아직 테스트하지 않음');
    const [isLoading, setIsLoading] = useState(false);

    // Supabase 연결 테스트 함수
    const testSupabaseConnection = async () => {
        setIsLoading(true);
        setConnectionStatus('테스트 중...');

        try {
            // 세션 정보 조회로 간단히 연결 확인 (어떤 DB나 테이블도 필요 없음)
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error('Supabase 연결 실패:', error);
                setConnectionStatus(`❌ 연결 실패: ${error.message}`);
                return false;
            }

            // 연결 성공
            console.log('Supabase 연결 성공!');
            setConnectionStatus('✅ 연결 성공!');
            return true;
        } catch (err) {
            // 예상치 못한 오류 발생
            console.error('예상치 못한 오류 발생:', err);
            setConnectionStatus(`❌ 오류 발생: ${err.message}`);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <h2>Supabase 연결 테스트</h2>

            <button
                onClick={testSupabaseConnection}
                disabled={isLoading}
                style={{
                    padding: '8px 16px',
                    backgroundColor: '#3ECF8E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoading ? '테스트 중...' : '연결 테스트 실행'}
            </button>

            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <h3>테스트 결과:</h3>
                <p><strong>상태:</strong> {connectionStatus}</p>
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
                <p>
                    이 테스트는 Supabase와의 기본 연결이 정상적으로 작동하는지만 확인합니다.
                    문제가 있는 경우 환경 변수와 Supabase URL, API 키를 확인하세요.
                </p>
            </div>
        </div>
    );
}

export default SupabaseTest;
