// SupabaseTest.js
import React, { useState } from 'react';
import { supabase } from '../lib/SupabaseClient.js'; // supabase 클라이언트 경로

function SupabaseTest() {
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // 연결 테스트
    const testConnection = async () => {
        setIsLoading(true);
        setResult('테스트 중...');

        try {
            const { data, error } = await supabase.rpc('now');

            if (error) {
                setResult(`연결 오류: ${error.message}`);
                return;
            }

            setResult(`연결 성공! 서버 시간: ${data}`);
        } catch (err) {
            setResult(`예상치 못한 오류 발생: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // 데이터 조회 테스트
    const testFetchData = async () => {
        setIsLoading(true);
        setResult('데이터 조회 중...');

        try {
            // 'your_table'을 실제 테이블 이름으로 변경하세요
            const { data, error } = await supabase
                .from('your_table')
                .select('*')
                .limit(5);

            if (error) {
                setResult(`데이터 조회 오류: ${error.message}`);
                return;
            }

            setResult(`조회된 데이터: ${JSON.stringify(data, null, 2)}`);
        } catch (err) {
            setResult(`예상치 못한 오류 발생: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // 데이터 추가 테스트
    const testInsertData = async () => {
        setIsLoading(true);
        setResult('데이터 추가 중...');

        try {
            // 테스트용 데이터 객체 (테이블 컬럼에 맞게 수정)
            const testData = {
                name: '테스트 데이터',
                created_at: new Date().toISOString()
            };

            const { data, error } = await supabase
                .from('your_table')
                .insert(testData)
                .select();

            if (error) {
                setResult(`데이터 추가 오류: ${error.message}`);
                return;
            }

            setResult(`추가된 데이터: ${JSON.stringify(data, null, 2)}`);
        } catch (err) {
            setResult(`예상치 못한 오류 발생: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // 인증 테스트 (선택적)
    const testAuth = async () => {
        setIsLoading(true);
        setResult('로그인 테스트 중...');

        try {
            // 테스트용 계정 정보 (실제 테스트 계정으로 변경 필요)
            const email = 'test@example.com';
            const password = 'test_password';

            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                setResult(`로그인 오류: ${error.message}`);
                return;
            }

            setResult(`로그인 성공! 사용자 ID: ${data.user.id}`);
        } catch (err) {
            setResult(`예상치 못한 오류 발생: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>Supabase 연동 테스트</h1>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={testConnection} disabled={isLoading}>연결 테스트</button>
                <button onClick={testFetchData} disabled={isLoading}>데이터 조회</button>
                <button onClick={testInsertData} disabled={isLoading}>데이터 추가</button>
                <button onClick={testAuth} disabled={isLoading}>인증 테스트</button>
            </div>

            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}>
                <h3>테스트 결과:</h3>
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {result || '아직 테스트를 실행하지 않았습니다.'}
        </pre>
            </div>
        </div>
    );
}

export default SupabaseTest;